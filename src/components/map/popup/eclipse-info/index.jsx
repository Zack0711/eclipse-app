import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import moment from "moment"

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import './index.styl'

const EclipseInfo = ({ data }) => {

  const [rows, setRows] = useState([])

  useEffect(() => {
    const newRows = []
    data.c1.date && newRows.push({ label: '初虧', ...data.c1})
    data.c2.date && newRows.push({ label: '全食或環食始', ...data.c2})
    data.mid.date && newRows.push({ label: '食甚', ...data.mid})
    data.c3.date && newRows.push({ label: '全食或環食終', ...data.c3})
    data.c4.date && newRows.push({ label: '復圓', ...data.c4})

    setRows(newRows)
  }, [data])

  return (
    <div className='eclipse-info'>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>日食階段</TableCell>
              <TableCell>日期</TableCell>
              <TableCell>時間</TableCell>
              <TableCell>高度角</TableCell>
              <TableCell>方位角</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell>{moment.utc(row.date).format('YYYY/MM/DD')}</TableCell>
                <TableCell>{moment.utc(row.date).format('HH:mm:ss')}</TableCell>
                <TableCell>{`${row.alt}°`}</TableCell>
                <TableCell>{`${row.azi}°`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

EclipseInfo.propTypes = {
}

export default EclipseInfo
