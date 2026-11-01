
"use client"

import { useEffect, useState } from "react"
import {
  getWaitlist,
  type WaitlistData,
} from "@/app/services/waitlistService"
import { getApiErrorMessage } from "@/app/services/api"
import Image from "next/image"
import logo from "@/app/components/logo/speaksmart.png"
import { api } from "@/app/services/api"
import axios from "axios"

/* ─── Table design tokens ────────────────────────────────────────────────────
 * Same idea as the Angular "Todos os Fechos" model: background and bottom rule
 * live on the CELL (never on <thead>/<tr>), so the sticky header doesn't
 * flicker while scrolling with border-collapse. The rule is an inset
 * box-shadow instead of a border for the same reason.
 * First and last columns carry the card inset (pl-5 / pr-5); middle ones px-3.
 */
const TH =
  "bg-gray-50 py-3 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shadow-[inset_0_-1px_0_#f3f4f6]"
const CELL_Y = "py-3.5"

const T = {
  table: "w-full min-w-[800px] border-collapse text-sm",
  thead: "sticky top-0 z-20",
  headRow: "text-gray-400",
  thFirst: `${TH} sticky left-0 z-30 w-16 pr-3 pl-5 text-left`,
  thLeft: `${TH} px-3 text-left`,
  thLast: `${TH} pr-5 pl-3 text-right`,
  row: "group transition-colors hover:bg-gray-50",
  tdFirst: `${CELL_Y} sticky left-0 z-10 bg-white pr-3 pl-5 text-left whitespace-nowrap tabular-nums transition-colors group-hover:bg-gray-50`,
  tdLeft: `${CELL_Y} px-3`,
  tdLast: `${CELL_Y} pr-5 pl-3 text-right whitespace-nowrap tabular-nums`,
} as const

function getInitials(email: string) {
  const name = email.split("@")[0] ?? ""
  const parts = name.split(/[._-]+/).filter(Boolean)
  const letters =
    parts.length > 1 ? parts[0][0] + parts[1][0] : name.slice(0, 2)
  return (letters || "?").toUpperCase()
}

export default function WaitlistDashboard() {
  const [entries, setEntries] = useState<WaitlistData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")
  const [reloadKey, setReloadKey] = useState(0)



const [isCheckingSession, setIsCheckingSession] = useState(true)
const [isAuthenticated, setIsAuthenticated] = useState(false)

// useEffect(() => {
//   let cancelled = false

//   async function initializePage() {
//     setIsCheckingSession(true)

//     try {
//       await api.get("/admin/session")

//       if (cancelled) return

//       setIsAuthenticated(true)

//       setIsLoading(true)
//       setErrorMessage("")

//       const data = await getWaitlist()

//       if (!cancelled) {
//         setEntries(data)
//       }
//     } catch (error) {
//       if (cancelled) return

//       setIsAuthenticated(false)

//       if (axios.isAxiosError(error) && error.response?.status !== 401) {
//         setErrorMessage(getApiErrorMessage(error))
//       }
//     } finally {
//       if (!cancelled) {
//         setIsCheckingSession(false)
//         setIsLoading(false)
//       }
//     }
//   }

//   void initializePage()

//   return () => {
//     cancelled = true
//   }
// }, [reloadKey])

useEffect(() => {
  let cancelled = false

  async function loadWaitlist() {
    setIsLoading(true)
    setErrorMessage("")

    try {
      const data = await getWaitlist()

      if (!cancelled) {
        setEntries(data)
      }
    } catch (error) {
      if (!cancelled) {
        setErrorMessage(getApiErrorMessage(error))
      }
    } finally {
      if (!cancelled) {
        setIsLoading(false)
      }
    }
  }

  void loadWaitlist()

  return () => {
    cancelled = true
  }
}, [reloadKey])

  const formatDate = (value: string) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value))

//   if (isCheckingSession) {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-[#0c0c0e]">
//       <div className="size-7 animate-spin rounded-full border-2 border-white/10 border-t-emerald-500" />
//     </main>
//   )
// }

// if (!isAuthenticated) {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-[#0c0c0e] px-4">
//       <div className="text-center">
//         <h1 className="text-2xl font-semibold text-white">404</h1>
//         <p className="mt-2 text-sm text-gray-400">
//           This page could not be found.
//         </p>
//       </div>
//     </main>
//   )
// }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c0c0e] px-4 py-8 text-gray-900 antialiased sm:px-6 lg:px-10 lg:py-14">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(16,185,129,0.10),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#0c0c0e_85%)]"
      />

      <div className="relative mx-auto max-w-6xl space-y-8">
        {/* Page heading */}
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Image
              src={logo}
              alt="SpeakSmart Logo"
              width={40}
              height={10}
              className="invert object-cover"
            />

            <div className="mt-6 mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pr-3 pl-2.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                SpeakSmart · Administration
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Waitlist
            </h1>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
              Manage and review people interested in SpeakSmart.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setReloadKey((current) => current + 1)}
            disabled={isLoading}
            className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm font-semibold text-gray-100 shadow-sm backdrop-blur transition-all hover:border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 disabled:cursor-not-allowed disabled:opacity-50 sm:self-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className={`size-4 ${isLoading ? "animate-spin" : ""}`}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7v5h-5M4 17v-5h5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.6 9A7 7 0 0 1 18 6.5L20 12M4 12l2 5.5A7 7 0 0 0 18.4 15"
              />
            </svg>
            Refresh
          </button>
        </header>

        {/* Summary */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-xl shadow-black/20 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5 sm:p-6">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Total subscribers
                </p>

                <p className="mt-3 text-4xl font-semibold tracking-tight tabular-nums text-gray-950">
                  {isLoading && entries.length === 0
                    ? "—"
                    : entries.length.toLocaleString("en-GB")}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  People registered on the waitlist
                </p>
              </div>

              <div className="flex size-11 items-center justify-center rounded-xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 text-gray-600 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="size-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 8v6M23 11h-6"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-xl shadow-black/20 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5 sm:p-6">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Data source
                </p>

                <p className="mt-3 text-2xl font-semibold tracking-tight text-gray-950">
                  PostgreSQL
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  Data retrieved through the SpeakSmart API
                </p>
              </div>

              <div className="flex size-11 items-center justify-center rounded-xl border border-emerald-100 bg-gradient-to-b from-emerald-50 to-emerald-100/60 text-emerald-700 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="size-5"
                  aria-hidden="true"
                >
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribers table */}
        <section className="min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/20 ring-1 ring-black/5">
          <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Subscribers
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                All registered email addresses.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-500 sm:self-auto">
              <span
                className={`size-1.5 rounded-full ${
                  isLoading ? "animate-pulse bg-amber-500" : "bg-emerald-500"
                }`}
              />
              {isLoading ? "Updating..." : "Latest records"}
            </div>
          </div>

          {errorMessage ? (
            <div className="m-5 rounded-xl border border-red-100 bg-red-50/70 p-5">
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="size-5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4.5M12 16h.01"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-red-700">
                    Unable to load subscribers
                  </p>

                  <p role="alert" className="mt-1 text-sm text-red-600">
                    {errorMessage}
                  </p>

                  <button
                    type="button"
                    onClick={() => setReloadKey((current) => current + 1)}
                    className="mt-4 rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-semibold text-red-700 shadow-sm transition-colors hover:bg-red-50"
                  >
                    Try again
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /*
             * Independent horizontal and vertical scrolling.
             * The table header remains visible during vertical scrolling.
             */
            <div
              className="w-full max-w-full overflow-auto overscroll-contain"
              style={{
                maxHeight: "500px",
                scrollbarGutter: "stable",
              }}
            >
              <table className={T.table}>
                <thead className={T.thead}>
                  <tr className={T.headRow}>
                    <th scope="col" className={T.thFirst}>
                      #
                    </th>

                    <th scope="col" className={`${T.thLeft} min-w-[320px]`}>
                      Email address
                    </th>

                    <th scope="col" className={`${T.thLast} min-w-[240px]`}>
                      Date joined
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100/70">
                  {entries.map((entry, index) => (
                    <tr key={entry.id} className={T.row}>
                      <td className={T.tdFirst}>
                        <span className="inline-flex h-6 min-w-7 items-center justify-center rounded-md bg-gray-100 px-1.5 text-xs font-semibold text-gray-400 transition-colors group-hover:bg-white group-hover:text-gray-600">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </td>

                      <td className={T.tdLeft}>
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            aria-hidden="true"
                            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-gradient-to-b from-emerald-50 to-emerald-100/60 text-[11px] font-bold tracking-wide text-emerald-700"
                          >
                            {getInitials(entry.email)}
                          </div>

                          <span
                            className="truncate text-sm font-medium text-gray-800"
                            title={entry.email}
                          >
                            {entry.email}
                          </span>
                        </div>
                      </td>

                      <td className={`${T.tdLast} text-sm text-gray-500`}>
                        {formatDate(entry.createdAt)}
                      </td>
                    </tr>
                  ))}

                  {!isLoading && entries.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-6 py-16 text-center">
                        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            className="size-6"
                            aria-hidden="true"
                          >
                            <rect
                              x="3"
                              y="5"
                              width="18"
                              height="14"
                              rx="2"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m3 7 9 6 9-6"
                            />
                          </svg>
                        </div>

                        <p className="mt-4 text-sm font-semibold text-gray-700">
                          No subscribers yet
                        </p>

                        <p className="mt-1 text-sm text-gray-400">
                          New registrations will appear here.
                        </p>
                      </td>
                    </tr>
                  )}

                  {isLoading && entries.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-6 py-16 text-center">
                        <div className="mx-auto size-6 animate-spin rounded-full border-2 border-gray-200 border-t-emerald-600" />

                        <p className="mt-3 text-sm text-gray-400">
                          Loading subscribers...
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Table footer */}
          <div className="flex flex-col gap-2 border-t border-gray-100 bg-gray-50/60 px-5 py-4 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Showing{" "}
              <span className="font-semibold tabular-nums text-gray-600">
                {entries.length.toLocaleString("en-GB")}
              </span>{" "}
              {entries.length === 1 ? "subscriber" : "subscribers"}
            </p>

            <p className="font-medium tracking-wide">SpeakSmart Waitlist</p>
          </div>
        </section>
      </div>
    </main>
  )
}