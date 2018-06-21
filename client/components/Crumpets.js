import React from 'react';

// this component renders a list of all crumpets and the locations at which they are available.

class Crumpets extends React.Component {
  constructor() {
    super();
    this.state = {
      crumpets: [],
      stores: [],
      crumpetsEatenToday: 0,
      loading: true,
    }
  }

  componentDidMount() {
    // fetch data here
    // callback / promise resoluve handler to setState.
    // const crumpets = await fetch(crumpets)
    // this.setState({ crumpets, loading: false })


  }

  render() {
    // display data

    // account for initial render w/o data ('loading' screen)

    if (loading) return <h1> Fetching your crumpets... </h1>

    return (
      <div className="crumpets-container">
        <h1>The Following Crumpets Await Your Enjoyment...</h1>
        {
          this.state.crumpets.map(crumpet => {
            return (
              <li key={crumpet.id}>
            {crumpet.name}
            {crumpet.description}
            {crumpet.price}
            </li>
            )
          });
        }
      </div>
    )
  }
}
