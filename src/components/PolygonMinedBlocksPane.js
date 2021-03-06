import React from 'react'
import { Table } from 'semantic-ui-react'
import moment from 'moment'
import * as api from '../api/web3Wrapper'

const PolygonMinedBlocksPane = ({ address }) => {
  if (!address.polygonMinedBlocks) return null
  return (
    <Table celled textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Block
          </Table.HeaderCell>
          <Table.HeaderCell>
            Age
          </Table.HeaderCell>
          <Table.HeaderCell>
            Reward
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {address.polygonMinedBlocks.map((block, key) => (
          <Table.Row key={key}>
            <Table.Cell>
              {block.blockNumber}
            </Table.Cell>
            <Table.Cell>
              {moment(block.timeStamp * 1000).fromNow()}
            </Table.Cell>
            <Table.Cell>
              {`${api.fromWei(block.blockReward, 'MATIC')} MATIC`}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default PolygonMinedBlocksPane