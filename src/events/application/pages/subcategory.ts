import { EventConfig } from "@/events/application/ports/event/event";
import { Event } from "@/events/common/services/Event"
import { SubcategoryOutputValidation, categorySubcategoryDataValidation } from "@/events/application/validations/category-subcategory.validation";
import { SubcategoryInput } from "@/events/application/schemas/category-subcategory.schema";
import { TagInput } from "@/events/application/schemas/tag.schema";

/**
 * Subcategory
 * data that needs to be declared on your store's subcategory product view
 */
export class Subcategory extends Event<SubcategoryOutputValidation> {

    constructor(config: EventConfig) {
        super('subcategory', categorySubcategoryDataValidation, config);
    }
    /**
     * List of subcategories present
     * @param categories {CategoryInput}
     * @returns
     */
    categories(categories: SubcategoryInput): this {
        this.data.categories = categories;
        return this
    }
    /**
     * Identifier set of page-related tags
     * @param tag {TagInput}
     * @returns
     */
    tag(tag: TagInput): this {
        this.data.tag = tag;
        return this
    }
}
