import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  FeesWithdrawn,
  FundingCancelled,
  FundsCollected,
  OwnershipTransferred,
  ProjectCreated,
  ProjectFunded
} from "../generated/Dcrowd/Dcrowd"

export function createFeesWithdrawnEvent(
  to: Address,
  amount: BigInt
): FeesWithdrawn {
  let feesWithdrawnEvent = changetype<FeesWithdrawn>(newMockEvent())

  feesWithdrawnEvent.parameters = new Array()

  feesWithdrawnEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  feesWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return feesWithdrawnEvent
}

export function createFundingCancelledEvent(
  projectId: BigInt,
  funder: Address,
  amount: BigInt
): FundingCancelled {
  let fundingCancelledEvent = changetype<FundingCancelled>(newMockEvent())

  fundingCancelledEvent.parameters = new Array()

  fundingCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  fundingCancelledEvent.parameters.push(
    new ethereum.EventParam("funder", ethereum.Value.fromAddress(funder))
  )
  fundingCancelledEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundingCancelledEvent
}

export function createFundsCollectedEvent(
  projectId: BigInt,
  creator: Address,
  funds: BigInt
): FundsCollected {
  let fundsCollectedEvent = changetype<FundsCollected>(newMockEvent())

  fundsCollectedEvent.parameters = new Array()

  fundsCollectedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  fundsCollectedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  fundsCollectedEvent.parameters.push(
    new ethereum.EventParam("funds", ethereum.Value.fromUnsignedBigInt(funds))
  )

  return fundsCollectedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProjectCreatedEvent(
  projectId: BigInt,
  creator: Address,
  expires: BigInt,
  goal: BigInt,
  uri: string
): ProjectCreated {
  let projectCreatedEvent = changetype<ProjectCreated>(newMockEvent())

  projectCreatedEvent.parameters = new Array()

  projectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "expires",
      ethereum.Value.fromUnsignedBigInt(expires)
    )
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam("goal", ethereum.Value.fromUnsignedBigInt(goal))
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )

  return projectCreatedEvent
}

export function createProjectFundedEvent(
  projectId: BigInt,
  funder: Address,
  amount: BigInt
): ProjectFunded {
  let projectFundedEvent = changetype<ProjectFunded>(newMockEvent())

  projectFundedEvent.parameters = new Array()

  projectFundedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  projectFundedEvent.parameters.push(
    new ethereum.EventParam("funder", ethereum.Value.fromAddress(funder))
  )
  projectFundedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return projectFundedEvent
}
