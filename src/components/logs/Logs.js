import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { PropTypes } from 'prop-types';
import { getLogs } from '../../actions/logActions'
import '../../App.css'

const Logs = ({ log: { logs, loading }, getLogs }) => {

    useEffect(() => {
        getLogs()
    }, [])

    if (loading || logs === null) {
        return <Preloader />
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h5 className="center" style={{ fontFamily: 'Open Sans Condensed' }}>System Logs</h5>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No Logs to show...</p>) : (logs.map(log => <LogItem log={log} key={log.id} />))}
        </ul >
    )
}


Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs)


