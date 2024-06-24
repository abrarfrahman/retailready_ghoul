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
    text: 'PRIME Energy Drink',
    name: 'Beverages',
    description: 'Use a strong, leak-proof container. Place absorbent materials around the product inside the carton.',
    monthValue: '1',
    yearValue: '10',
  },
  {
    text: 'Abu Garcia Pro Fisherman\'s Rod',
    name: 'SportingGoods',
    description: 'Use a long, sturdy box. Add cushioning materials to protect the rod.',
    monthValue: '2',
    yearValue: '20',
  },
  {
    text: 'Tennis Racket',
    name: 'sporting_equipment',
    description: 'Use a sturdy box. Add cushioning materials to protect the racket frame.',
    monthValue: '2',
    yearValue: '20',
  },
]

export function StepThree() {
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

      <Input id="picture" type="file" />
      <Label htmlFor="picture">Upload a picture to verify</Label>
    </>
  )
}
