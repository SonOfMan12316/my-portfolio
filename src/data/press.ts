export interface PressInterface {
  /** Publication or outlet name */
  outlet: string
  /** Headline or title of the piece */
  title: string
  /** ISO date string, e.g. '2026-03-14' */
  date?: string
  link: string
}

/**
 * Press mentions, interviews, and features.
 * Empty by design — add real entries here and `PressSection` will render itself.
 */
export const press: Array<PressInterface> = []
