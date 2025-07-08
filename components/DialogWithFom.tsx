import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { atom, useAtom } from 'jotai'
import ExampleForm from './ExampleForm'

export const dialogVisibleAtom = atom(false)

export function DialogWithForm() {
  const [isOpen, setIsOpen] = useAtom(dialogVisibleAtom)

  return (
    <>
      <button className="flex px-10 py-2 bg-gray-300 border" onClick={() => setIsOpen(true)}>
        Open Form In Dialog Instead
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Form In Dialog</DialogTitle>
            <ExampleForm inDialog />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
