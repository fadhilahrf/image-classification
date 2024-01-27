export interface IModel {
    title?: string;
    name?: string;
    slug?: string;
    class?: string[];
    description?: string;
    inputSize?: number;
    channel?: number;
}

export const MODEL_DATA: IModel[] = [
    {
        title: 'Cat and Dog Model',
        name:'cat_dog_model',
        slug: 'cat-dog-model',
        class: ['CAT', 'DOG'],
        description: 'Classification for cat and dog',
        inputSize: 126,
        channel: 3
    },
    {
        title: 'MNIST Model',
        name:'mnist_model',
        slug: 'mnist-model',
        class: ['0', '1', '2', '3' ,'4' , '5', '6', '7', '8', '9'],
        description: 'Classification for handwritten numbers',
        inputSize: 28,
        channel: 1
    }
]