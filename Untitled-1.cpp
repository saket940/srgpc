#include <stdio.h>

int main() {
    // Declare and initialize an array of strings
    char *as[5] = {"sytdytyjdf", "ytfysdjuf", "sgugdgj", "hrhkes", "gfhdggfj"};

    // Iterate over the array using a for loop
    for (int i = 0; i < 5; i++) {
        char ad=*as[i];
        printf("Element at index %d: %o\n", i, ad);
    }

    return 0;
}
