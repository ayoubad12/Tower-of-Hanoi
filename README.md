# Tower-of-Hanoi
# Tower-of-Hanoi
### briefly: 

There are three towers. The objective of the game is to move all the disks over to third tower 
but you can't place a larger disk onto a smaller disk. 

for more informations: https://en.wikipedia.org/wiki/Tower_of_Hanoi
![](/images%20for%20github/Tower-of-Hanoi-Tower-of-Brahma-or-Lucas-Tower.jpg)

and here is a GIF that explain how the actual process looks like:

![](images%20for%20github/Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif)

## my solution:
##### note: 
X(n) it the number of transition needed to put n disk ,to the next tower.   
I split this puzzle to 2 important stages ,for better understanding ..


#### stage1:
let say we have "n" disc . the first step obviously is to take the base disc , to the third tower. 
to do that we need to take the discs above it to the second tower ,so the third tower stays empty, which means we need to make X(n-1) transition. after that, wee add 1 transition to put our base disc in the third tower.

#### stage2:
now we need to transfer the rest of the discs to the third tower, the rest is 'n-1' discs, so we need to make X(n-1) transition.

here is an image that shows the exact steps:   
![](images%20for%20github/tower%20of%20honai-mine.jpg)
   

### in conclusion 
the relation is : 
## X(n)= 2*X(n-1)+1
with n an intiger greater than 0.

#### the code:  
now we know this relation , and we know that the transition needed for n=1 disc is X(1)=1 ,and this an axiom..
we can write a code that ,base on X(1)=1, can calculate X(n).
 
X(2)=2*X(1)+1    
X(3)=2*X(2)+1  
X(4)=2*X(3)+1  
X(5)=2*X(4)+1  
....  
X(n)=2*X(n-1)+1  
