export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

  export const dataset = assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    'Missing NEXT_PUBLIC_SANITY_DATASET'
  )

  export const projectId = assertValue(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zimspytz',
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID'
  )

  export const token = assertValue(
    'sk247wF0BjAv3mQtlieGKzMKMqcLO0cguDTvtbz5l7eA9NLsKKfVxoRRlCETYxc1lAMxufhx32Uy0JUXr1at1096L3KGPOCKc3oulTVMRJlg5FvW2jaKiVYrIk8SUG4AOLddvJtH9jHF8CyaHmxftrcqTmmAbj3xiVDBZ35hYIxmmZgBC6zJ',
    'Missing NEXT_SANITY_API_TOKEN'
  )

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
