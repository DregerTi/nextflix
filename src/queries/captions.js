import { gql } from '@apollo/client';
import client from '../apollo.config';

export const getCaptions = async (preview = false) => {
    const { response } = await client.query({
        variables: { preview: preview },
        query: gql`
            query ($preview: Boolean!) {
                captionCollection (preview: $preview) {
                    items {
                        key
                        value
                    }
                }
            }
        `,
    });

    return response?.captionCollection?.items;
}