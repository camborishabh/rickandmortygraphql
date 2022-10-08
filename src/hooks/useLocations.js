import {useQuery, gql} from "@apollo/client";

const GET_LOCATIONS = gql`
query GetLocations{
    locations{
        results{
            name
            type
            dimension
            residents{
                name
            }
        }
    }
}
`

export const useLocations = () => {
    const {data, error, loading} = useQuery(GET_LOCATIONS, {

    });

    return {
        data,
        error,
        loading
    };
};