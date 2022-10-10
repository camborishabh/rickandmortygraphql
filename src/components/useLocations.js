import {useQuery, gql} from "@apollo/client";
import {  useLocation } from 'react-router-dom';
//$page: Page
// page: $page

//$page: Int!
//(page: $page)
const GET_LOCATIONS = gql`
query GetLocations($page: Int!){
    locations(page: $page){
        results{
            name
            type
            dimension
            residents{
                name
            }
        }
        info{
            count
            pages
            next
            prev
          }
    }
}
`

const GET_EPISODES = gql`
query GetEpisodes($page: Int!){
    episodes(page: $page){
        results{
          id
          name
          air_date
          episode
          characters{
            name
          }
        }
        info{
            count
            pages
            next
            prev
          }
    }
}
`

// const GET_EPISODE = gql`
// query GetEpisodes{
//     episodes{
//         results{
//           id
//           name
//           air_date
//           episode
//           characters{
//             name
//           }
//         }
//         info{
//             count
//             pages
//             next
//             prev
//           }
//     }
// }
// `

export const useLocations = (pageNo) => {
    const {data, error, loading} = useQuery(GET_LOCATIONS, {
         variables:{
            page: pageNo
         }
    });

    return {
        data,
        error,
        loading
    };
};

export const useEpisodes = (pageNo) => {
    const {data, error, loading} = useQuery(GET_EPISODES, {
         variables:{
            page: pageNo
         }
    });



    return {
        data,
        error,
        loading
    };
};

// export const useEpisode = () => {
//     const {data, error, loading} = useQuery(GET_EPISODE);

//     // const result = data.find(e => e.id === state.id)
//     // const {state} = useLocation()
//     // console.log("resut: ", result);

    

//     return {
//         data,
//         error,
//         loading
//     };
    
// };

 


