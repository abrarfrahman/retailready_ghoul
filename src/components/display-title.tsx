'use client'
import { useMultiContext } from '@/contexts/multistep-form-context'
import { ThankYouIcon } from './icon/icon'

const titleData = {
  title: [
    'Warehouse Employee Login Portal',
    'Select Your Order',
    'Pallet 001',
    'Pallet 002',
    'Finishing up',
    'Thank you!',
  ],
  description: [
    'Please provide your DSG EID, email address, and phone number',
    'Choose one of these queued orders or create a new one',
    'You have the following products available (search coming soon)',
    'You have the following products available (search coming soon)',
    'Double-check everything looks OK before confirming.',
    'If you spot an issue, email us at dsg_support@retailready.com',
  ],
}
export function DisplayTitle() {
  const { step } = useMultiContext()
  return (
    <div
      className={`${step === 6 && 'flex h-full flex-col items-center justify-center gap-5 text-center lg:px-16'}`}
    >
      {step ===6 && <ThankYouIcon className="size-16 lg:size-32" />}
      <h1 className={`text-2xl font-bold text-sky-950 lg:text-4xl`}>
        {titleData.title[step - 1]}
      </h1>
      <p className="text-gray-400 lg:text-lg">
        {titleData.description[step - 1]}
      </p>
    </div>
  )
}
