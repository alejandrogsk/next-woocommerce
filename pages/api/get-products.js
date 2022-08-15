import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { NEXT_PUBLIC_WORDPRESS_SITE_URL, WOO_CONSUMER_API_KEY,WOO_SECRET_API_KEY } from "../../src/utils/endpoints";

const api = new WooCommerceRestApi({
  url: NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: WOO_CONSUMER_API_KEY,
  consumerSecret: WOO_SECRET_API_KEY,
  version: "wc/v3"
});

export default async function handler(req,res) {
    const responseData = {
        success: false,
        products: []
    }

    const { perPage } = req?.query ?? {};

    try {
        const { data } = await api.get('products', {
            per_page: perPage || 50
        });

        responseData.success = true;
        responseData.products = data;
        res.status(200).json(responseData);
    } catch (error) {
        responseData.error = error.message;
        res.status(500).json(responseData);
    }

}

