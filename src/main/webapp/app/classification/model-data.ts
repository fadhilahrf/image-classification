export interface IModel {
    title?: string;
    name?: string;
    slug?: string;
    class?: string[];
    description?: string;
}

export const MODEL_DATA: IModel[] = [
    {
        title: 'Cat and Dog Model',
        name:'cat_dog_model',
        slug: 'cat-dog-model',
        class: ['CAT', 'DOG'],
        description: 'Classification for cat and dog'
    }
]