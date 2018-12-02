 import React from 'react'
 const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 50,
    fontFamily: 'Helvetica Neue',
    boxSizing: 'border-box',
    width: 650,
    margin: '0px auto'
  },
  button: {
    textAlign: 'center',
    background: 'linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%)',
    border: 'none',
    borderRadius: '5px',
    position: 'relative',
    borderBottom: '4px solid #2b8bc6',
    color: '#fbfbfb',
    fontWeight: '600',
    textShadow: '1px 1px 1px rgba(0,0,0,.4)',
    fontSize: '1.5em',
    textAlign: 'left',
    textIndent: '5px',
    boxShadow: '0px 3px 0px 0px rgba(0,0,0,.2)',
    cursor: 'pointer',
    padding: '1.5rem'
  },
  h3: {
    fontWeight: '600',
    fontSize: '1.5em',
    padding: '1.5rem',
    textShadow: '1px 1px 1px rgba(0,0,0,.4)',
  }
 }

class MyLink extends React.Component {

  constructor(){
    super();
    this.state = {
      cleared: false
    }
  }

  clearServiceWorkers = () => {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => {
        for (let registration of registrations) {
          console.log('->', registration)
          registration.unregister()
        }
        this.setState({cleared: true})
      })
  }

  render() {
    return (
      <div style={styles.container}>    
        { !this.state.cleared 
        ? 
        <button style={styles.button} onClick={() => { this.clearServiceWorkers() }}>
          Clear Service Workers
        </button>
        :
        <h3 style={styles.h3}>Service Workers Cleared!</h3>
        }  

      </div>

    )
  }
}

export default MyLink
