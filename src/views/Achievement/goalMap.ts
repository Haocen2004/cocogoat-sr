import achevementsAmos from '@/generated/amos-data/amos/achievements/index'
export const goalMap = {} as Record<number, number>
const goalKeys = {
    1: 'i-trailblazer',
    2: 'vestige-of-luminflux',
    3: 'the-rail-unto-the-stars',
    4: 'fathom-the-tnfathomable',
    5: 'the-memories-we-share',
    6: 'glory-of-the-unyielding',
    7: 'eager-for-battle',
    8: 'moment-of-joy',
    9: 'universe-in-a-nutshell',
} as Record<number, string>
achevementsAmos.forEach((cat) => {
    cat.key = goalKeys[cat.id] || cat.key.replace(/-/g, '-') || cat.id.toString()
    cat.achievements.forEach((ach) => {
        goalMap[ach.id] = cat.id
    })
})
