const CODE1 = `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Building the Prototype</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div id="container">
    <h1>Leopard</h1>
    <!-- photo credit: wikipedia.org, image taken by Ritik -->
    <img src="leopard.jpg" alt="leopard">
    <div id="card" class="animal-info">
      <p id="interesting-fact">Learn about different types of Tiger, how big they are, how fast they run, how they hunt and more..</p>
      <ul id="facts">
        <li>
          <span>Scientific Name</span>: Average Length
        </li>
        <li>
          <span>Average Length</span>: 60 – 70 cm
        </li>
        <li>
          <span>Average Lifespan</span>: 12 – 17 years
        </li>
        <li>
          <span>Habitat</span>: the savannahs
        </li>
      </ul>
      <p id="summary">The leopard has a long and muscular body, well proportioned, with wide legs. The pectoral muscles are developed to allow it to climb trees. The tail is long, curved upward when walking and serves as a pendulum when moving in trees2. The leopard weighs on average 58 kg for the male and 37 kg for the female3. The largest specimens can reach 90 kg and are mainly found in Central Asia and Iran, in some Indian forests where the tiger is absent, as well as in parts of Africa including South Africa, Kenya's mountain valleys. , West African tropical forests (Congo, Gabon, Cameroon) and formerly Algeria4. The size of the female is about two-thirds that of the male5. The length of the body is 1 to 1.6 meters for males and 0.95 to 1.24 meters for females, with a tail of 52 to 90 cm. The height at the withers ranges from 45 to 78 cm3.
      </p>
    </div>
  </div>
</body>

</html>`;
const CODE2 = `
body {
  padding: 20px;
}

#container{
  border : 2px solid grey;
  padding: 20px;
}

img {
  width: 300px;
}
.animal-info {
  font-style: italic ;
  border : 2px solid grey;
  padding: 1px;
}

li {
  list-style: none;
}

span { font-weight:bold; } `

const CODE3 = `# Task 1:
text = "Hello World"

def reverse(x):
    list =''
    length = len(x) -1
    while length >= 0 :
        list = list + x[length]
        length = length -1
    return list
print("the reversed text is: "+reverse(text))`
const CODE4 = `# Task 2:
no_list = [22,68,90,78,90,88]

def average(x):
    sum = 0
    for i in x:
        sum += i
    return sum / len(x)

print(average(no_list))`
const CODE5 = `# Task 3:
no_list = [1,2,3,4]

def maximum(no_list):
    #complete the function to return the highest number in the list
    max= no_list[0]
    for i in no_list:
        if i > max:
            max = i
    return max
print(maximum(no_list))`
const CODE6 = `# Task 4:
no_list = [22,22,2,1,11,11,2,2,3,3,3,4,5,5,5,55,55,66]

def unique_list(l):
    x =  []
    for i in l:
        if i not in x:
            x.append(i)
    return x
                   
print(unique_list(no_list))`

export {
    CODE1,
    CODE2,
    CODE3,
    CODE4,
    CODE5,
    CODE6
}