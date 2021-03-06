homepage_data = {
    'title': 'What is Sorting?',
    'bubble_gif': 'https://s1.ax1x.com/2022/04/18/LaBssO.gif',
    'insertion_gif': 'https://s1.ax1x.com/2022/04/18/LaByLD.gif',
    'counting_gif': 'https://s1.ax1x.com/2022/04/18/LaBcee.gif',
    'intro': "A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of element in the respective data structure.",
}

bubble_data = {
    'title': 'BUBBLE SORT',
    'gif': 'https://s1.ax1x.com/2022/04/18/LaBssO.gif',
    'help': {
        'title': 'Introduction to Bubble Sort',
        'description': "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order. Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order. Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.",
        'image': "https://cdn.programiz.com/cdn/farfuture/kn1zM7ZGIj60jcTe3mv8gAtbrvFHqxgqfQ7F9MdjPuA/mtime:1582112622/sites/tutorial2program/files/Bubble-sort-0.png",
        'algorithm': {
            '1': 'Starting from the first index, compare the first and the second elements. We can see -2 and 45 getting swapped on right.',
            '2': 'If the first element is greater than the second element, they are swapped. So, swap 45 and 0.',
            '3': 'Now, compare the third (45) element and the fourth (11) element. Since, 45 is greater than 11 they are swaped. ',
            '4': 'The above process goes on until the last element. Lastly, 45 and -9 are swapped since 45 > -9'
        },
        'worst_complexity': "O(n^2)",
        'best_complexity': "O(n)"
    },
    'Step1': {
        'array': [29, 10, 14, 37],
        'state': 'false',
        'description': 'Swap 29 and 10 as 29 > 10'
    },
    'Step2': {
        'array': [10, 29, 14, 37],
        'state': 'false',
        'description': 'Swap 29 and 10 as 29 > 10'
    },
    'Step3': {
        'array': [10, 14, 29, 37],
        'state': 'false',
        'description': 'Swap 29 and 10 as 29 > 10'
    }
}

insertion_data = {
    'title': 'INSERTION SORT',
    'gif': 'https://s1.ax1x.com/2022/04/18/LaByLD.gif',
    'help': {
        'title': 'Introduction to Insertion Sort',
        'description': "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.",
        'image': 'https://cdn.programiz.com/cdn/farfuture/l-X2VCkF2rp4i0X8mZX6BGJL_FQW9EL8PkKhBswQfpc/mtime:1582112622/sites/tutorial2program/files/Insertion-sort-0_1.png',
        'algorithm': {
            "1": "Iterate from arr[1] to arr[n] over the array.",
            "2": "Compare the current element (key) to its predecessor.",
            "3": "If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.",
            "4": "The main difference between insertion sort and bubble sort is how the array would look after first iteration. That is there could be multiple swaps for same element (can travel displace position more than 1) after outer loop for insertion sort. Illustration on next page."
        },
        'worst_complexity': "O(n^2)",
        'best_complexity': "O(n)"
    },
    'Step1': {
        'array': [29, 10, 14, 37],
        'state': 'false',
        'description': 'Inserting 29 in its correct place so swap 29 and 10'
    },
    'Step2': {
        'array': [10, 29, 14, 37],
        'state': 'false',
        'description': 'Inserting 29 in its correct place so swap 29 and 14'
    },
    'Step3': {
        'array': [10, 14, 29, 37],
        'state': 'false',
        'description': '10, 14 and 37 we check similarly their correct position'
    }
}

quiz_data = {
    "1": {
        'id': '1',
        'type': 'draggable',
        'topic': 'Bubble Sort',
        'prompt': 'Drag and Drop elements on how they would look after the second pass of Bubble Sort',
        'input': [13, 8, 5, 17, 21],
        'answer': [8, 5, 13, 17, 21],
        'explanation': "Drag and drop the numbered bars to their correct sorted order following the instructions above. Remember, \
            Bubble Sort works by repeatedly swapping the adjacent elements if they are in the wrong order."
    },
    "2": {
        'id': '2',
        'type': 'draggable',
        'topic': 'Bubble Sort',
        'prompt': 'Drag and Drop elements on how they would look after the thrid pass of Bubble Sort',
        'input': [4, 13, 6, 8, 21],
        'answer': [4, 6, 8, 13, 21],
        'explanation': "Drag and drop the numbered bars to their correct sorted order following the instructions above. Remember, \
            Bubble Sort works by repeatedly swapping the adjacent elements if they are in the wrong order."
    },
    "3": {
        'id': '3',
        'type': 'draggable',
        'topic': 'Insertion Sort',
        'prompt': 'Drag and Drop elements on how they would look after the second pass of Insertion Sort',
        'input': [13, 8, 5, 17, 21],
        'answer': [5, 8, 13, 17, 21],
        'explanation': "Drag and drop the numbered bars to their correct sorted order following the instructions above. Remember, \
            Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. \
                At each iteration, insertion sort removes one element from the input data, finds the location it belongs \
                within the sorted list, and inserts it there. It repeats until no input elements remain."
    }, 
    "4": {
        'id': '4',
        'type': 'draggable',
        'topic': 'Insertion Sort',
        'prompt': 'Drag and Drop elements on how they would look after the second pass of Insertion Sort',
        'input': [4, 13, 6, 8, 21],
        'answer': [4, 6, 13, 8, 21],
        'explanation': "Drag and drop the numbered bars to their correct sorted order following the instructions above. Remember, \
            Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. \
                At each iteration, insertion sort removes one element from the input data, finds the location it belongs \
                within the sorted list, and inserts it there. It repeats until no input elements remain."
    }, 
    "5": {
        'id': '5',
        'type': 'multiple choice',
        'topic': 'Bubble Sort',
        'prompt': 'What will the array [2, 1, 4, 3] look like after first the first swap performed by the Bubble Sort Algorithm?',
        'option1': '2, 4, 1, 3',
        'option2': '1, 3, 2, 4',
        'option3': '1, 2, 3, 4',
        'option4': '1, 2, 4, 3',
        'answer': '1, 2, 4, 3',
        'explanation': "The first swap in bubble sort starts by comparing the number at the first index with the number at the second. Therefore, \
            2 is compared with 1. Since 2 is larger than 1, their order is swapped."
    }, 
    "6": {
        'id': '6',
        'type': 'multiple choice',
        'topic': 'Bubble Sort',
        'prompt': 'What is the best case time complexity of Bubble Sort?',
        'option1': 'n^2',
        'option2': 'nlogn',
        'option3': 'n',
        'option4': 'n(logn)^2',
        'answer': 'n',
        'explanation': "The bubble sort is at its best if the input data is sorted. i.e. If the input data is sorted \
            in the same order as expected output. This can be achieved by using one boolean variable. The boolean variable \
            is used to check whether the values are swapped at least once in the inner loop."
    },
    "7": {
        'id': '7',
        'type': 'multiple choice',
        'topic': 'Bubble Sort',
        'prompt': 'The number of swaps required to sort the array [8, 22, 7, 9, 31] in ascending order is: ',
        'option1': '4',
        'option2': '10',
        'option3': '3',
        'option4': '21',
        'answer': '3',
        'explanation': '1 : 8, 7, 9, 22, 31 = 2 swaps, \
            2 : 7, 8, 9, 22, 31 = 1 swaps, \
            Total 3 swaps are required to sort the array.'
    },
    "8": {
        'id': '8',
        'type': 'multiple choice',
        'topic': 'Insertion Sort',
        'prompt': 'What are steps taken by insertion sort to sort the array [5, 4, 3, 2, 1] completely?',
        'option1': '4 5 3 2 1 2 3 4 5 1 3 4 5 2 1 1 2 3 4 5',
        'option2': '5 4 3 1 2 5 4 1 2 3 5 1 2 3 4 1 2 3 4 5',
        'option3': '4 3 2 1 5 3 2 1 5 4 2 1 5 4 3 1 5 4 3 2',
        'option4': '4 5 3 2 1 3 4 5 2 1 2 3 4 5 1 1 2 3 4 5',
        'answer': '4 5 3 2 1 3 4 5 2 1 2 3 4 5 1 1 2 3 4 5',
        'explanation': 'In the insertion sort , just imagine that the first element is already sorted and all the \
            right side Elements are unsorted, we need to insert all elements one by one from left to right in the sorted Array. \
            Sorted : 5 ---> unsorted : 4 3 2 1. Insert all elements less than 5 on the left (Considering 5 as the key).\
            Now key value is 4 and array will look like this Sorted : 4 5 ---> unsorted : 3 2 1. Similarly, for all the cases \
            the key will always be the newly inserted value and all the values will be compared to that key and inserted in to proper position.'
    },
    "9": {
        'id': '9',
        'type': 'multiple choice',
        'topic': 'Insertion Sort',
        'prompt': 'What is the worst case time complexity of insertion sort?',
        'option1': 'n^2',
        'option2': 'nlogn',
        'option3': 'n',
        'option4': 'n^3',
        'answer': 'n^2',
        'explanation': ' This is because insertion of a data at an appropriate position involves two steps: \
            1. Calculate the position. 2. Shift the data from the position calculated in step #1 \
            one step right to create a gap where the data will be inserted.'
    },
    "10": {
        'id': '10',
        'type': 'multiple choice',
        'topic': 'Insertion Sort',
        'prompt': 'Consider the array [6, 4, 8, 1, 3]. The cost of each move is 10 dollars. What is associated cost of insertion sort when element 1 (index 3)\
            reaches the first position of the array?',
        'option1': '0 dollars',
        'option2': '20 dollars',
        'option3': '30 dollars',
        'option4': '5 dollars',
        'answer': '20 dollars',
        'explanation': 'When element in index 3 (1) reaches the first position of the array, only 2 computations will be made. Therefore, the associated cost is 20 dollars.'
    }
}

def get_homepage_data():
    return homepage_data

def get_bubble_data():
    return bubble_data

def get_insertion_data():
    return insertion_data

def get_quiz_data():
    return quiz_data

