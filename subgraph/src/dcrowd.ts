import { BigInt } from "@graphprotocol/graph-ts";
import {
  Dcrowd,
  FeesWithdrawn as FeesWithdrawnEvent,
  FundingCancelled as FundingCancelledEvent,
  FundsCollected as FundsCollectedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProjectCreated as ProjectCreatedEvent,
  ProjectFunded as ProjectFundedEvent,
} from "../generated/Dcrowd/Dcrowd";

export function handleFeesWithdrawn(event: FeesWithdrawnEvent): void {}

export function handleFundingCancelled(event: FundingCancelledEvent): void {}

export function handleFundsCollected(event: FundsCollectedEvent): void {}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {}

export function handleProjectCreated(event: ProjectCreatedEvent): void {}

export function handleProjectFunded(event: ProjectFundedEvent): void {}
