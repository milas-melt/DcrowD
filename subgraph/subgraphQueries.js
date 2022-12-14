import { gql } from "@apollo/client";

const getActiveProjects = () => {
  return gql`
    {
      activeProjects(where: { funded: false }) {
        projectId
        creator
        expires
        funded
        goal
        balance
        uri
      }
    }
  `;
};

const getInactiveProjects = () => {
  return gql`
    {
      activeProjects(where: { funded: true }) {
        # id
        projectId
        creator
        expires
        funded
        goal
        balance
        uri
      }
    }
  `;
};

const getAllProjects = () => {
  return gql`
    {
      activeProjects {
        projectId
        creator
        expires
        funded
        goal
        balance
        uri
      }
    }
  `;
};

const getWalletTransactions = (funder) => {
  return gql`
    {
      projectFundeds( where: {funder: ${funder}}) {
        projectId
        amount
        count
      }
      fundingCancelleds( where: {funder: ${funder}}) {
        projectId
        amount
        count
    }
  `;
};

const getProjectTransactions = (projectId) => {
  return gql`
    {
      activeProjects(where: { projectId: ${projectId} }) {
        projectId
        creator
        expires
        funded
        goal
        balance
        uri
      }
      projectFundeds( where: {projectId: ${projectId}}) {
        projectId
        funder
        amount
        count
      }
      fundingCancelleds( where: {projectId: ${projectId}}) {
        projectId
        funder
        amount
        count
      }
      fundsCollecteds( where: {projectId: ${projectId}}) {
        projectId,
        creator,
        funds
      }
    }
  `;
};

export {
  getActiveProjects,
  getInactiveProjects,
  getAllProjects,
  getWalletTransactions,
  getProjectTransactions,
};
