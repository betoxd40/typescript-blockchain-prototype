import { Block, Transaction } from '@types'
import sha256 from 'sha256'

class Blockchain {
  // Blocks mined
  public chain: Block[]
  // New Transactions created before they're put into a block
  public pendingTransactions: Transaction[]

  constructor() {
    this.chain = []
    this.pendingTransactions = []

    // Genesis Block
    this.createNewBlock(100, '0', '0')
  }

  public createNewBlock(nonce: number, previousBlockHash: string, hash: string): Block {
    const newBlock: Block = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.pendingTransactions,
      nonce,
      hash,
      previousBlockHash
    }

    // We want to clear the transactions because they're already stored in this current block
    this.pendingTransactions = []
    this.chain.push(newBlock)

    return newBlock
  }

  public createNewTransaction(amount: number, sender: string, recipient: string): number {
    const newTransaction: Transaction = {
      amount,
      sender,
      recipient
    }
    this.pendingTransactions.push(newTransaction)

    // Number of the block that the newTransaction will be added to
    return this.getLastBlock().index + 1
  }

  public hashBlock(
    previousBlockHash: string,
    currentBlockData: Transaction[],
    nonce: number
  ): string {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData)
    const hash = sha256(dataAsString)

    return hash
  }

  public proofOfWork(previousBlockHash: string, currentBlockData: Transaction[]): number {
    let nonce = 0
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)

    while (!this.isHashAccomplishProofOfWork(hash)) {
      nonce++
      hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)
    }

    return nonce
  }

  public getLastBlock(): Block {
    return this.chain[this.chain.length - 1]
  }

  private isHashAccomplishProofOfWork = (hash: string): boolean => {
    const maxHashZeros = '0000'
    return hash.substring(0, 4) === maxHashZeros
  }
}

const blockchain = new Blockchain()
export default blockchain
