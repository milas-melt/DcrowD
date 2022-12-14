import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  Dcrowd,
  CreatorRatingUpdated as CreatorRatingUpdatedEvent,
  FeesWithdrawn as FeesWithdrawnEvent,
  FundingCancelled as FundingCancelledEvent,
  FundsCollected as FundsCollectedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProjectCreated as ProjectCreatedEvent,
  ProjectFunded as ProjectFundedEvent,
} from "../generated/Dcrowd/Dcrowd";
import {
  CreatorRatingUpdated,
  FeesWithdrawn,
  FundingCancelled,
  OwnershipTransferred,
  ProjectCreated,
  ActiveProject,
  ProjectFunded,
  FundsCollected,
} from "../generated/schema";

export function handleProjectCreated(event: ProjectCreatedEvent): void {
  let projectCreated = ProjectCreated.load(event.params.projectId.toString());
  let activeProject = ActiveProject.load(event.params.projectId.toString());

  if (!projectCreated) {
    projectCreated = new ProjectCreated(event.params.projectId.toString());
  }
  if (!activeProject) {
    activeProject = new ActiveProject(event.params.projectId.toString());
  }

  projectCreated.projectId = event.params.projectId;
  activeProject.projectId = event.params.projectId;

  projectCreated.creator = event.params.creator;
  activeProject.creator = event.params.creator;

  projectCreated.expires = event.params.expires;
  activeProject.expires = event.params.expires;

  activeProject.funded = false;

  projectCreated.goal = event.params.goal;
  activeProject.goal = event.params.goal;

  activeProject.balance = new BigInt(0);

  projectCreated.uri = event.params.uri;
  activeProject.uri = event.params.uri;

  projectCreated.save();
  activeProject.save();
}

export function handleProjectFunded(event: ProjectFundedEvent): void {
  let projectFunded = ProjectFunded.load(
    getProjectFundedIdFromEventParams(
      event.params.projectId,
      event.params.funder,
      event.params.amount
    )
  );
  let activeProject = ActiveProject.load(event.params.projectId.toString());

  if (!projectFunded) {
    projectFunded = new ProjectFunded(
      getProjectFundedIdFromEventParams(
        event.params.projectId,
        event.params.funder,
        event.params.amount
      )
    );
    projectFunded.projectId = event.params.projectId;
    projectFunded.funder = event.params.funder;
    projectFunded.amount = event.params.amount;
    projectFunded.count = 1;
  } else {
    projectFunded.count++;
  }

  activeProject!.balance = activeProject!.balance.plus(event.params.amount);

  projectFunded.save();
  activeProject!.save();
}

export function handleFundsCollected(event: FundsCollectedEvent): void {
  let fundsCollected = FundsCollected.load(event.params.projectId.toString());
  let activeProject = ActiveProject.load(event.params.projectId.toString());

  if (!fundsCollected) {
    fundsCollected = new FundsCollected(event.params.projectId.toString());
  }

  activeProject!.funded = true;

  fundsCollected.projectId = event.params.projectId;
  fundsCollected.creator = event.params.creator;
  fundsCollected.funds = event.params.funds;

  fundsCollected.save();
  activeProject!.save();
}

export function handleFundingCancelled(event: FundingCancelledEvent): void {
  let fundingCancelled = FundingCancelled.load(
    getProjectFundedIdFromEventParams(
      event.params.projectId,
      event.params.funder,
      event.params.amount
    )
  );
  let activeProject = ActiveProject.load(event.params.projectId.toString());

  if (!fundingCancelled) {
    fundingCancelled = new FundingCancelled(
      getProjectFundedIdFromEventParams(
        event.params.projectId,
        event.params.funder,
        event.params.amount
      )
    );
    fundingCancelled.projectId = event.params.projectId;
    fundingCancelled.funder = event.params.funder;
    fundingCancelled.amount = event.params.amount;
    fundingCancelled.count = 1;
  } else {
    fundingCancelled.count++;
  }

  activeProject!.balance = activeProject!.balance.plus(event.params.amount);

  fundingCancelled.save();
  activeProject!.save();
}

export function handleCreatorRatingUpdated(
  event: CreatorRatingUpdatedEvent
): void {
  let creatorRatingUpdated = CreatorRatingUpdated.load(
    event.params.creator.toString()
  );

  if (!creatorRatingUpdated) {
    creatorRatingUpdated = new CreatorRatingUpdated(
      event.params.creator.toString()
    );
  }

  creatorRatingUpdated.rating = event.params.rating;

  creatorRatingUpdated.save();
}

export function handleFeesWithdrawn(event: FeesWithdrawnEvent): void {}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {}

function getProjectFundedIdFromEventParams(
  projectId: BigInt,
  funder: Address,
  amount: BigInt
): string {
  return projectId.toHexString() + funder.toHexString() + amount.toHexString();
}
