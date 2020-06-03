<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-In Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some Strong Text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Global Directives</h1>
                <!-- <p v-highlight>Color this text</p> -->
                <p v-highlight="'red'">Color this text</p>
                <p v-highlight:background="'red'">
                    Color this text with custom argument
                </p>
                <p v-highlight:background.delayed="'red'">
                    Color this text with modifier
                </p>
            </div>
        </div><hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Local Directives</h1>
                <p v-local-highlight="'red'">Color this text</p>
                <p v-local-highlight:background="'red'">
                    Color this text with custom argument
                </p>
                <p v-local-highlight:background.delayed="'red'">
                    Color this text with modifier
                </p>
                <p v-local-highlight:background.delayed.blink="'red'">
                    Color this text with 2 modifier
                </p>
                <p
                    v-local-highlight2:background.delayed.blink="{mainColor:'red', secondaryColor: 'green', delay: 500}"
                >
                    Color this text with 2 modifier and object input
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            "local-highlight": {
                bind(el, binding, vnode) {
                    let delay = 0;
                    if (binding.modifiers["delayed"]) {
                        delay = 3000;
                    }
                    if (binding.modifiers["blink"]) {
                        let mainColor = binding.value;
                        let secondaryColor = 'blue';
                        let currentcolor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentcolor == secondaryColor
                                ?
                                currentcolor = mainColor
                                :
                                currentcolor = secondaryColor
                                if (binding.arg === "background") {
                                    el.style.backgroundColor = currentcolor;
                                } else {
                                    el.style.color = currentcolor;
                                }
                            }, 1000);
                        }, delay);
                    } else {
                        setTimeout(() => {
                        if (binding.arg === "background") {
                            el.style.backgroundColor = binding.value;
                        } else {
                            el.style.color = binding.value;
                        }
                    }, delay);
                    }
                }
            },
            "local-highlight2": {
                bind(el, binding, vnode) {
                    let delay = 0;
                    if (binding.modifiers["delayed"]) {
                        delay = binding.value.delay || 3000;
                    }
                    if (binding.modifiers["blink"]) {
                        let mainColor = binding.value.mainColor;
                        let secondaryColor = binding.value.secondaryColor;
                        let currentcolor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentcolor == secondaryColor
                                ?
                                currentcolor = mainColor
                                :
                                currentcolor = secondaryColor
                                if (binding.arg === "background") {
                                    el.style.backgroundColor = currentcolor;
                                } else {
                                    el.style.color = currentcolor;
                                }
                            }, 1000);
                        }, delay);
                    } else {
                        setTimeout(() => {
                        if (binding.arg === "background") {
                            el.style.backgroundColor = binding.value;
                        } else {
                            el.style.color = binding.value;
                        }
                    }, delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>
