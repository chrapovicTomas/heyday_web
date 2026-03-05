import { defineField, defineType } from 'sanity'

export const pizzaType = defineType({
    name: 'pizza',
    title: 'Pizza',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'Zobrazovacie Číslo (napr. 01)',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'name',
            title: 'Názov Pizze',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'ingredients',
            title: 'Ingrediencie',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Cena v € (napr. 6.00)',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'allergens',
            title: 'Alergény (napr. 1, 7)',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Obrázok',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Poradie (menšie číslo bude vyššie)',
            type: 'number',
            initialValue: 50,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'id',
            media: 'image',
        },
        prepare({ title, subtitle, media }) {
            return {
                title,
                subtitle: `Číslo: ${subtitle}`,
                media,
            }
        },
    },
})
