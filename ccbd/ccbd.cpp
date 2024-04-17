#include <iostream>
#include <vector>
#include <string>

using namespace std;

struct tree{
    char root;
    vector<tree*> child;
    bool isword;
    tree(char l) : root(l), isword(false) {}
};

class N_gram{
private:
    tree *root;
    tree* createtree(char letter) {
        tree* newtree = new tree(letter);
        return newtree;
    }
public:
    N_gram()
    {
        root = createtree('\0');
    }

    void insert_word(string word){
        tree *current=root;
        for(char letter:word){
            bool found_letter=false;
            for(tree *child: current->child){
                if(child->root== letter)
                {
                    current=child;
                    found_letter=true;
                    break;
                }
            }
            if(!found_letter){
                tree* newchild = createtree(letter);
                current->child.push_back(newchild);
                current = newchild;
            }
        }
        current->isword = true;
    }
    bool find_word(string word){
        tree *current=root;
        bool wordfund=false;
        for(char letter:word){
            bool found_letter=false;
            for(tree *child: current->child){
                if(child->root== letter)
                {
                    current=child;
                    found_letter=true;
                    break;
                }
            }
            if(!found_letter){
                wordfund = false;
            }
        }
        return wordfund;
    }

};

int main()
{
    N_gram tree;
    cout << "Hello to N_gram" << endl;
    char ch;
    do{
        cout << "Menu:" << endl;
        cout << "1. Insert a word" << endl;
        cout << "2. test a word" << endl;
        cout << "3. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> ch;
        cin.ignore();
        switch(ch) {
            case '1':
                {
                    string word;
                    cout << "Enter the word to insert: ";
                    getline(cin, word);
                    tree.insert_word(word);
                    cout << "Word \"" << word << "\" inserted successfully." << endl;
                break;
                }
            case '2':
                {
                    string word;
                    cout << "Enter the word to test: ";
                    getline(cin, word);

                    if(tree.find_word(word))
                      cout << "the Word \"" << word << "\" fund successfully." << endl;
                      else{
                        cout << "the Word \"" << word << "\" not fund." << endl;
                      }
                break;
                }
            default :
                cout << "Invalid choice. Please try again." << endl;
        }


    }while(ch!='3');


    return 0;
}
