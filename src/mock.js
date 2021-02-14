/* Provides mock data for the Tasks

  IMPORTANT: DO NOT MODIFY
 */
export function loadUsers () {
  return [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Wick',
      dateOfBirth: '02/09/1964',
    },
    {
      id: 2,
      firstName: 'Donald',
      lastName: 'Duck',
      dateOfBirth: '9/06/1920',
    },
    {
      id: 3,
      firstName: 'Harry',
      lastName: 'Potter',
      dateOfBirth: '31/07/1980',
    },
    {
      id: 4,
      firstName: 'Joan',
      lastName: 'Arc (of)',
      dateOfBirth: '06/01/1412',
    },
  ]
}

export function loadTrips () {
  return [
    {
      id: 1,
      name: 'Work Trip',
      travellers: ['John Wick'],
      destinations: [
        { location: 'Paris, France', start: '21/01/2021', end: '27/01/2021'},
        { location: 'London, UK', start: '28/01/2021', end: '02/02/2021'},
      ],
      status: 'Approved',
    },
    {
      id: 2,
      name: 'Going Home',
      travellers: ['Donald Duck'],
      destinations: [
        { location: 'Duckburg', start: '7/08/2021', end: '20/10/2021'},
      ],
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Leisure',
      travellers: ['John Wick'],
      destinations: [
        { location: 'Toronto, Canada', start: '01/03/2021', end: '19/04/2021'},
      ],
      status: 'Declined',
    },
    {
      id: 4,
      name: 'Big day!',
      travellers: ['John Wick', 'Helen Wick', 'Daisy'],
      destinations: [
        { location: 'Kailua, Hawaii', start: '19/09/2014', end: '24/10/2014'},
      ],
      status: 'Cancelled',
    },
  ]
}

export function loadBudgetTypes () {
  return [
    {
      id: 1,
      name: 'Accommodation',
    },
    {
      id: 2,
      name: 'Airfares',
    },
    {
      id: 3,
      name: 'Others',
    }
  ]
}
