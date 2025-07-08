import clsx from 'clsx'

const containerClassName = clsx`flex flex-col`
const labelClassName = clsx`w-fit`
const inputClassName = clsx`border border-gray-700`

export default function ExampleForm({ inDialog = false }: { inDialog: boolean }) {
  const nameFieldId = inDialog ? 'name-in-dialog' : 'name-outside-of-dialog'
  const emailFieldId = inDialog ? 'email-in-dialog' : 'email-outside-of-dialog'
  const phoneFieldId = inDialog ? 'phone-in-dialog' : 'phone-outside-of-dialog'

  return (
    <form className="w-96 flex flex-col mx-4 gap-4">
      <div className={containerClassName}>
        <label htmlFor={nameFieldId} className={labelClassName}>
          Name
        </label>
        <input id={nameFieldId} className={inputClassName} type="text" />
      </div>
      <div className={containerClassName}>
        <label htmlFor={emailFieldId} className={labelClassName}>
          Email
        </label>
        <input id={emailFieldId} className={inputClassName} type="email" />
      </div>
      <div className={containerClassName}>
        <label htmlFor={phoneFieldId} className={labelClassName}>
          Phone Number
        </label>
        <input id={phoneFieldId} className={inputClassName} type="tel" />
      </div>
    </form>
  )
}
