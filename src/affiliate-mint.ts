import {
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  affMint as affMintEvent
} from "../generated/AffiliateMint/AffiliateMint"
import {
  ApprovalForAll,
  OwnershipTransferred,
  TransferBatch,
  TransferSingle,
  URI,
  affMint
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values
  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.id = event.params.id
  entity.value = event.params.value
  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.value = event.params.value
  entity.id = event.params.id
  entity.save()
}

export function handleaffMint(event: affMintEvent): void {
  let entity = new affMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.quantity = event.params.quantity
  entity.clickid = event.params.clickid
  entity.save()
}
