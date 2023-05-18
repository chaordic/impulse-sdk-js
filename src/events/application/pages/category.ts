import { EventConfig } from "@/events/application/ports/event/event";
import { Event } from "@/events/common/services/Event"
import { CategoryOutputValidation, categorySubcategoryDataValidation } from "@/events/application/validations/category-subcategory-validation";
import { CategoryInput } from "@/events/application/schemas/category-subcategory.schema";
import { TagInput } from "@/events/application/schemas/tag.schema";

/**
 * Category
 * data that needs to be declared on your store's category product view
 */
export class Category extends Event<CategoryOutputValidation> {

    constructor(config: EventConfig) {
        super('category', categorySubcategoryDataValidation, config);
    }
    /**
     * List of categories present
     * @param categories {CategoryInput}
     * @returns
     */
    categories(categories: CategoryInput): this {
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
