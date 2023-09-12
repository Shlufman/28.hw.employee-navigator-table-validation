import {navItems} from "../config/constants";

export default class Navigator {
    #parentTag;
    #activeIndex;
    #controls;//{refLi:refDiv}

    constructor({parentSelector, index}) //, navItems
    {
        this.#parentTag = document.querySelector(parentSelector);
        if (!this.#parentTag)
            throw `Wrong parent form id ${parentSelector}`;
        this.#parentTag.innerHTML= this.#createInnerHTML(navItems);

        this.#controls = navItems.map(item=>'#'+item.id).map(this.#createControls); //selectors.
        this.#addHandler();
        this.#showElementOfIndex(index);
    }

    #createInnerHTML(navItems) {
        // console.log( navItems.map(this.#createNavLi).join(''))
        return navItems.map(this.#createNavLi).join('');
    }

    #createNavLi(navItem) {
        return `<li class="nav-item" aria-controls="${navItem.ariaControls}" id="${navItem.id}">
            <label class="nav-link">${navItem.innerHTML}</label>
        </li>`;
    }
    #createControls = selector =>
    {
        let control = {};
        control.$navItem = $(selector);
        control.$divItem = $('#' + control.$navItem.attr('aria-controls'));
        return control;
    }

    #addHandler = () => {
        this.#controls.forEach((item, index) => {
            item.$navItem.click(event => {
                event.preventDefault();
                this.#showElementOfIndex(index);
            })
        })
    }

    #showElementOfIndex = index => {
        if (this.#activeIndex === index)
            return;
        if (this.#activeIndex !== undefined)
            this.#hideControl(this.#controls[this.#activeIndex]);
        this.#showControl(this.#controls[index]);
        this.#activeIndex = index;
    }

    #hideControl = control => {
        control.$navItem.removeClass('active');
        control.$divItem.attr('hidden', true);
    }

    #showControl = control => {
        control.$navItem.addClass('active');
        control.$divItem.attr('hidden', false);
    }
}