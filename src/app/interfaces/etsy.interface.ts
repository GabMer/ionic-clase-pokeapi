export interface etsy{
    listing_id: number;
    user_id: number;
    shop_id: number;
    title: string;
    description: string;
    state: "active" | "inactive" | "sold_out" | string;
    creation_timestamp: number;
    created_timestamp: number;
    ending_timestamp: number;
    original_creation_timestamp: number;
    last_modified_timestamp: number;
    updated_timestamp: number;
    state_timestamp: number;
    quantity: number;
    shop_section_id: number;
    featured_rank: number;
    url: string;
    num_favorers: number;
    non_taxable: boolean;
    is_taxable: boolean;
    is_customizable: boolean;
    is_personalizable: boolean;
    personalization_is_required: boolean;
    personalization_char_count_max: number;
    personalization_instructions: string;
    listing_type: "physical" | "digital";
    tags: string[];
    materials: string[];
    shipping_profile_id: number;
    return_policy_id: number;
    processing_min: number;
    processing_max: number;
    who_made: "i_did" | "collective" | "someone_else";
    when_made: "made_to_order" | "before_2000" | "2000_2010" | "2010_2020" | "2020_present";
    is_supply: boolean;
    item_weight: number;
    item_weight_unit: "oz" | "lb" | "g" | "kg";
    item_length: number;
    item_width: number;
    item_height: number;
    item_dimensions_unit: "in" | "cm";
    is_private: boolean;
    style: string[];
    file_data: string;
    has_variations: boolean;
    should_auto_renew: boolean;
    language: string;
    price: {
      amount: number;
      divisor: number;
      currency_code: string;
    };
    taxonomy_id: number;
  };
  
export interface etsyuser{
    user_address_id:number;
    user_id:number;
    name:String;
    first_line: string;
    second_line: string;
    city: string;
    state: string;
    zip: string;
    iso_country_code:String;
    country_name: String;
    is_deafualt_shipping_address: boolean;
    
}
  