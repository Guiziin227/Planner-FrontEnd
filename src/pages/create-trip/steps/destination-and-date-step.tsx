import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react'
import { Button } from '../../../components/button'
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import 'react-day-picker/dist/style.css'

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean
  eventStartandEndDates: DateRange | undefined
  closeGuestInput: () => void
  openGuestInput: () => void
  setDestination: (destination: string) => void
  setEventStartandEndDates: (dates: DateRange | undefined) => void
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  closeGuestInput,
  openGuestInput,
  setDestination,
  setEventStartandEndDates,
  eventStartandEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  const displayedDate =
    eventStartandEndDates &&
    eventStartandEndDates.from &&
    eventStartandEndDates.to
      ? format(eventStartandEndDates.from, "d'/'LLL")
          .concat(' à ')
          .concat(format(eventStartandEndDates.to, "d'/'LLL"))
      : null

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestInputOpen}
        className="flex items-center gap-2 text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40">
          {displayedDate || 'Quando?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-zinc-300">
                  Selecione a data
                </h2>
                <button
                  onClick={closeDatePicker}
                  type="button"
                  className="bg-transparent text-zinc-400 hover:bg-zinc-900"
                >
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              mode="range"
              selected={eventStartandEndDates}
              onSelect={setEventStartandEndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestInputOpen ? (
        <Button onClick={closeGuestInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput} variant="primary">
          <ArrowRight className="size-5" />
          Continuar
        </Button>
      )}
    </div>
  )
}
