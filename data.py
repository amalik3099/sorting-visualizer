bubble_data = {
    'title': 'BUBBLE SORT',
    'gif': './data/bubble.mov',
    'help': {
        'title': 'Introduction to Bubble Sort',
        'description': "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order. Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order. Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort."
    },
    'step1': {
        'array': [29, 10, 14, 37],
        'state': 'false',
        'description': 'Swap 29 and 10 as 29 > 10'
    },
    'step2': {
        'array': [10, 29, 14, 37],
        'state': 'false',
        'description': 'Swap 29 and 10 as 29 > 10'
    },
    'step3': {
        'array': [10, 14, 29, 37],
        'state': 'false',
        'description': 'Swap 29 and 10 as 29 > 10'
    }
}

insertion_data = {
    'title': 'INSERTION SORT',
    'gif': './data/insertion.mov',
    'help': {
        'title': 'Introduction to Insertion Sort',
        'description': "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part. Algorithm To sort an array of size n in ascending order: 1: Iterate from arr[1] to arr[n] over the array. 2: Compare the current element (key) to its predecessor. 3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element."
    },
    'step1': {
        'array': [29, 10, 14, 37],
        'state': 'false',
        'description': 'Inserting 29 in its correct place so swap 29 and 10'
    },
    'step2': {
        'array': [10, 29, 14, 37],
        'state': 'false',
        'description': 'Inserting 29 in its correct place so swap 29 and 14'
    },
    'step3': {
        'array': [10, 14, 29, 37],
        'state': 'false',
        'description': '10, 14 and 37 we check similarly their correct position'
    }
}

def get_bubble_data():
    return bubble_data

def get_insertion_data():
    return insertion_data

