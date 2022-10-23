import {useQuery, gql} from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
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
`
export default function GraphExample() {
    const { loading, error, data } =  useQuery(GET_ACTIVE_ITEMS)
    console.log(data)
    console.log('HIhihiih')
    return <div>hi{data}</div>
}
