import React from 'react';
import { StyleSheet } from 'aphrodite/no-important';
import GenericButton from './GenericButton';

export default class SpecialButton extends React.Component {
  render(){
    return (
      <GenericButton style={styles.special}>
        {this.props.children}
      </GenericButton>
    )
  }
}

const styles = StyleSheet.create({
  special: {
    backgroundColor: '#EC407A',
    ':hover': {
      backgroundColor: '#AD1457',
    },
  }
})
