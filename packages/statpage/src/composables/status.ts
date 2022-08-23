import { fetchJSON } from 'src/utils'
import { computed, onUnmounted, ref } from 'vue'

export interface IURUptime {
  label: 'success'
  ratio: string
}

export interface IURResponseTime {
  value: number
  datetime: string
}

export interface IURMonitor {
  monitorId: number
  createdAt: number
  statusClass: string
  name: string
  url: null
  type: string
  timezone: string
  checkInterval: string
  logs: string[]
  responseTimes: IURResponseTime[]
  '7dRatio': IURUptime
  '1dRatio': IURUptime
  '30dRatio': IURUptime
  '90dRatio': IURUptime
  dailyRatios: IURUptime[]
}

export interface IURStatistics {
  uptime: Record<'l1' | 'l7' | 'l30' | 'l90', IURUptime>
  latest_downtime: null
  counts: Record<'up' | 'down' | 'paused', number>
  count_result: string
}

export interface IURListResponse {
  status: 'ok'
  psp: {
    perPage: number
    totalMonitors: number
    monitors: Pick<
      IURMonitor,
      | 'monitorId'
      | 'createdAt'
      | 'statusClass'
      | 'name'
      | 'url'
      | 'type'
      | 'dailyRatios'
      | '90dRatio'
      | '30dRatio'
    >[]
  }
  days: string[]
  statistics: IURStatistics
}

export interface IURMonitorResponse {
  title: string
  status: 'ok'
  monitor: IURMonitor
  days: string[]
  timezone: string
  statistics: Pick<IURStatistics, 'counts' | 'count_result'>
}

export async function getMonitorList(pageId: string): Promise<IURListResponse> {
  return fetchJSON(`https://asset.zisu.dev/api/status/${pageId}/`)
}

export async function getMonitor(pageId: string, monitorId: string) {
  return fetchJSON(`https://asset.zisu.dev/api/status/${pageId}/${monitorId}/`)
}

export function useStatus(pageId: string) {
  const MAX_COUNTDOWN = 5
  const COUNTDOWN_INTERVAL = 1000

  const loading = ref(false)
  const status = ref('unknown')
  const text = ref('Loading service status')
  const updateCountdown = ref(0)
  const countdownRatio = computed(() => updateCountdown.value / MAX_COUNTDOWN)
  const update = async () => {
    loading.value = true
    try {
      const resp = await getMonitorList(pageId)
      status.value = resp.status
      text.value = resp.statistics.count_result
    } catch (e) {
      status.value = 'unknown'
      text.value = '' + e
    }
    loading.value = false
  }
  const timeout = setInterval(() => {
    if (loading.value) return
    if (!updateCountdown.value) {
      updateCountdown.value = MAX_COUNTDOWN // update every 5 seconds
      update()
    } else {
      updateCountdown.value--
    }
  }, COUNTDOWN_INTERVAL)
  onUnmounted(() => clearTimeout(timeout))
  return { loading, status, text, updateCountdown, countdownRatio }
}
