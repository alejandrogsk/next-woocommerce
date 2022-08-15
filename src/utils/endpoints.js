
export const NEXT_PUBLIC_WORDPRESS_SITE_URL=process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL || "";

//those two are used for woocommerce api auth
export const WOO_CONSUMER_API_KEY=process.env.WOO_CONSUMER_API_KEY || "";
export const WOO_SECRET_API_KEY=process.env.WOO_SECRET_API_KEY || "";

export const HEADER_DATA_ENDPOINT = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header` || "";
export const PRODUCT_DATA_ENDPOINT = process.env.NEXT_PUBLIC_GET_PRODUCTS_LOCAL || "";

export const CART_ENDPOINT = process.env.NEXT_PUBLIC_ADD_TO_CART_ENDPOINT || "";