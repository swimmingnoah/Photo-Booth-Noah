def test1(name):
    return name




def test2():
    name = test1()
    print(name)

def main():
    test1("noah")
    test2()


main()