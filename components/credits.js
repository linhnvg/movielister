import groupBy from 'lodash.groupby'

export default function Credits({ crew }) {
  const jobs = ['Director', 'Characters', 'Screenplay', 'Writer', 'Story']

  const persons = groupBy(
    crew.filter((person) => jobs.includes(person.job)),
    'name'
  )

  const credits = Object.keys(persons)
    .map((name) => ({
      name,
      id: persons[name][0].id,
      jobs: persons[name]
        .map((person) => person.job)
        .sort((a) => a === 'Director' && -1),
    }))
    .sort((a) => a.jobs.includes('Director') && -1)

  return (
    <div className="grid grid-cols-2 gap-4 justify-between">
      {credits.map((person) => (
        <div key={person.id}>
          <strong className="font-semibold">{person.name}</strong>
          <p className="text-white-65">{person.jobs.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}
