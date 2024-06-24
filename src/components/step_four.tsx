'use client'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { useMultiContext } from '@/contexts/multistep-form-context'
import { useFormContext } from 'react-hook-form'
import { Input } from './ui/input'
import { Label } from './ui/label'

const addOnsData = [
  {
    text: 'LED Bike Light Bulb',
    name: 'light_bulbs',
    description: 'Wrap each light bulb in bubble wrap or foam. Use dividers inside the carton to prevent bulbs from touching.',
    monthValue: '1',
    yearValue: '10',
  },
  {
    text: 'Nike Elite Socks',
    name: 'apparel',
    description: 'Fold in pairs of two and pack flat, interlocking in a chevron shape.',
    monthValue: '2',
    yearValue: '20',
  },
]

export function StepFour() {
  const { control } = useFormContext()
  const { isYear } = useMultiContext()
  return (
    <>
      {addOnsData.map((adds, i) => {
        return (
          <FormField
            key={i}
            control={control}
            name={adds.name}
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Checkbox
                    onCheckedChange={field.onChange}
                    checked={field.value}
                    className="absolute inset-y-1/3 ml-4 size-5"
                  />
                </FormControl>
                <FormLabel className="flex h-[80px] cursor-pointer items-center gap-4 rounded-md border p-2 pl-12 shadow-sm hover:border-indigo-800 peer-focus-visible:ring-1 peer-aria-checked:border-indigo-600 lg:h-full lg:items-start lg:justify-between lg:p-5 lg:pl-12">
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="font-bold text-sky-950">{adds.text}</p>
                    <p className="text-xs text-gray-400">{adds.description}</p>
                  </div>
                  <p className="text-sm text-indigo-600">
                    ${isYear ? adds.yearValue : adds.monthValue}/
                    {isYear ? 'yr' : 'mo'}
                  </p>
                </FormLabel>
              </FormItem>
            )}
          />
        )
      })}

      <Label>!!Electronics!! Packing: Wrap each electronic item in anti-static bubble wrap. Use foam inserts to secure the items in the carton. Labeling: Include "Fragile" and "Handle with Care" labels.</Label>

      <Input id="picture" type="file" />
      <Label htmlFor="picture">Upload a picture to verify</Label>
    </>
  )
}
