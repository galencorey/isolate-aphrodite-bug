import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default class GenericButton extends React.Component {
  render(){
      return (
        <div className={css(styles.button, this.props.style)}>
          {this.props.children}
        </div>
      )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    margin: 50,
    backgroundColor: '#1E88E5',
    color: 'white',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#1565C0',
    },
  }
})
