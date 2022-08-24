const items = [
    {title: 'Umbrella "Eterno"', price: '15', color: 'Black', size: 'Small', img: 'https://content.rozetka.com.ua/goods/images/big/195942239.jpg', info: 'Folding umbrella "Eterno" full automatic'},
    {title: 'Umbrella "Doppler"', price: '30', color: 'Black', size: 'Small', img: 'https://content.rozetka.com.ua/goods/images/big/195926164.jpg', info: 'Folding umbrella "Doppler" full automatic'},
    {title: 'Umbrella "Bergamo"', price: '10', color: 'Yellow', size: 'Small', img: 'https://content2.rozetka.com.ua/goods/images/big/195938997.jpg', info: 'Folding umbrella "Bergamo" automatic'},
    {title: 'Umbrella "LINE ART"', price: '15', color: 'Green', size: 'Small', img: 'https://content.rozetka.com.ua/goods/images/big/219797392.jpg', info: 'Folding umbrella "LINE ART" full automatic'},
    {title: 'Umbrella "Bergamo"', price: '10', color: 'Blue', size: 'Small', img: 'https://content.rozetka.com.ua/goods/images/big/195946120.jpg', info: 'Folding umbrella "Bergamo" automatic'},
    {title: 'Umbrella "Bergamo"', price: '10', color: 'Black', size: 'Small', img: 'https://content1.rozetka.com.ua/goods/images/big/195946112.jpg', info: 'Folding umbrella "Bergamo" automatic'},
    {title: 'Umbrella "Bergamo"', price: '10', color: 'Red', size: 'Small', img: 'https://content1.rozetka.com.ua/goods/images/big/195946115.jpg', info: 'Folding umbrella "Bergamo" automatic'},
    {title: 'Umbrella "Bergamo"', price: '10', color: 'Green', size: 'Small', img: 'https://content1.rozetka.com.ua/goods/images/big/195946122.jpg', info: 'Folding umbrella "Bergamo" automatic'},
    {title: 'Umbrella "Bergamo"', price: '10', color: 'White', size: 'Small', img: 'https://content1.rozetka.com.ua/goods/images/big/195938996.jpg', info: 'Folding umbrella "Bergamo" automatic'},
    {title: 'Umbrella "Bergamo"', price: '10', color: 'Pink', size: 'Small', img: 'https://content.rozetka.com.ua/goods/images/big/195946117.jpg', info: 'Folding umbrella "Bergamo" automatic'},
    {title: 'Beach umbrella', price: '10', color: 'Green', size: 'Medium', img: 'https://content.rozetka.com.ua/goods/images/big/271788553.jpg', info: 'Beach umbrella with a tilt'},
    {title: 'Umbrella "Time Eco"', price: '40', color: 'Blue', size: 'Medium', img: 'https://content.rozetka.com.ua/goods/images/big/46900531.jpg', info: 'Beach umbrella with a tilt'},
    {title: 'Umbrella "Sun Comfort Sunflex "', price: '80', color: 'White', size: 'Large', img: 'https://content1.rozetka.com.ua/goods/images/big/71606559.jpg', info: 'Sun Comfort Sunflex umbrella'},
];

class DOMInterractions {
  render(destinationElement, elements) {
    const wrapper = document.getElementById("itemWrapper");
    if (wrapper) {
      wrapper.remove();
    }
    destination.append(elements);
  }
}

const input = document.getElementById("search");
const colorInput = document.getElementById("color_select");
const sizeInput = document.getElementById("size_select");
const destination = document.getElementById("destination");
const DOM = new DOMInterractions();

var minSlider = document.getElementById('min');
var maxSlider = document.getElementById('max');

var outputMin = document.getElementById('min-value');
var outputMax = document.getElementById('max-value');

outputMin.innerHTML = minSlider.value;
outputMax.innerHTML = maxSlider.value;

minSlider.oninput = function(){
 outputMin.innerHTML=this.value;
 changeHandler();
}

maxSlider.oninput = function(){
 outputMax.innerHTML=this.value;
 changeHandler();
}




function toDivFormat(items) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.id = "itemWrapper";
  items.map((item) => {
    const element = document.createElement("div");
    element.classList.add("product");

    const title = document.createElement("div");
    title.classList.add("title_holder");
    title.textContent = item.title;

    const price = document.createElement("div");
    price.classList.add("price_holder");
    price.textContent = `Price: ${item.price}$`;

    const size = document.createElement("div");
    size.classList.add("size_holder");
    size.textContent = `Size: ${item.size}`;

    const img = document.createElement("img");
    img.classList.add("img");
    img.src = item.img;

    const color = document.createElement("div");
    color.classList.add("color_holder");
    color.textContent = `Color: ${item.color}`;

    const info = document.createElement("div");
    info.classList.add("info");
    info.textContent = item.info;

    const product_holder = document.createElement("div");
    product_holder.classList.add("product_holder");

    const title_price_holder = document.createElement("div");
    title_price_holder.classList.add("title_price_holder");

    const color_size_holder = document.createElement("div");
    color_size_holder.classList.add("color_size_holder");

    title_price_holder.append(title);
    title_price_holder.append(price);
    color_size_holder.append(color);
    color_size_holder.append(size);
    product_holder.append(title_price_holder);
    product_holder.append(color_size_holder);
    product_holder.append(info);
    element.append(img);
    element.append(product_holder);

    wrapper.append(element);
    return element;
  });
  return wrapper;
}

function sortItems(titleValue, sizeValue, colorValue) {
  return items.filter((item) =>
    item.title.toLowerCase().includes(titleValue.toLowerCase()) && item.size.toLowerCase().includes(sizeValue.toLowerCase()) && item.color.toLowerCase().includes(colorValue.toLowerCase()) && parseInt(item.price) > parseInt(outputMin.innerHTML) && parseInt(item.price) < parseInt(outputMax.innerHTML)
  );
}

function changeHandler() {
  console.log(input.value);
  const sortedItems = sortItems(input.value, sizeInput.value, colorInput.value);
  DOM.render(destination, toDivFormat(sortedItems));
}

DOM.render(destination, toDivFormat(items));
input.oninput = changeHandler;
colorInput.onchange = changeHandler;
sizeInput.onchange = changeHandler;
