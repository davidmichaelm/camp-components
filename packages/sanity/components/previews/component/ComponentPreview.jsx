/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './ComponentPreview.css?inline'

class ComponentPreview extends React.PureComponent {
    static propTypes = {
        document: PropTypes.object // eslint-disable-line react/forbid-prop-types
    }

    static defaultProps = {
        document: null
    }

    componentDidMount() {

    }

    render() {
        const { options } = this.props
        const { displayed } = this.props.document
        if (!displayed) {
            return (<div className={styles.componentWrapper}>
                <p>There is no document to preview</p>
            </div>)
        }

        const { Component } = options;

        if (!Component) {
            return (<div className={styles.componentWrapper}>
                <p>Hmm. Having problems constructing the preview.</p>
            </div>)
        }

        return (
            <div className={styles.componentWrapper}>
                <Component {...displayed} />
            </div>
        )
    }
}

export default ComponentPreview
