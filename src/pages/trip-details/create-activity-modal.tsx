import { Calendar, Tag, X } from 'lucide-react'
import { Button } from '../../components/button'

interface CreateActivityModalProps {
  closedCreateActivityModal: () => void
}

export function CreateActivityModal({
  closedCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-300">
              Cadastrar atividade
            </h2>
            <button
              onClick={closedCreateActivityModal}
              type="button"
              className="bg-transparent text-zinc-400 hover:bg-zinc-900"
            >
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm">
            Todos os convidados podem visualizar as atividades.
          </p>
        </div>

        <form>
          <div className="space-y-3">
            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Tag className="text-zinc-400 size-5" />
              <input
                type="text"
                name="title"
                placeholder="Qual a atividade?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Calendar className="text-zinc-400 size-5" />
                <input
                  type="datetime-local"
                  name="occurs-at"
                  placeholder="Data/Horári"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
            </div>

            <Button size="full">Salvar atividade</Button>
          </div>
        </form>
      </div>
    </div>
  )
}