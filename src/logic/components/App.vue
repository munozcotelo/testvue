<template>

    <div class="component">

        <h2>App Component</h2>

        <p>Hola {{ title }}</p>

        <p>{{ slotName }}</p>

        <!-- <div> -->
        <!--     <h1>Viene del plugin</h1> -->
        <!--     <p v-plugin-directive>Aplicar directiva desde plugin</p> -->
        <!--  -->
        <!--     <plugin-component/> -->
        <!--  -->
        <!--     <p>PluginInfo (con provide desde el plugin)    : {{ pluginInfo }}</p> -->
        <!--     <p>Plugin Options ( con provide desde el plugin) : {{ JSON.stringify( pluginOptions ) }}</p> -->
        <!--  -->
        <!-- </div> -->

        <CompositionApiComponent
            prop-one="propiedad uno"
            v-bind:propNumber=propToCompositionApi
            id="checkCompositionApi"
            ref="refToCompositionApiComponent"
        >
            <p>un slot</p>
        </CompositionApiComponent>

        <!-- <span>Como pasar una valor numerico</span> -->
        <!-- <ChildComponent v-bind:value="5" /> -->

        <div v-if="false">

            <AlvaroComponent
                alvaro="Lorem ipsum"
                tag1="value from parent App"
                attr1="an attribute 1"
            />

            <CompositionApiComponent
                prop-one="propiedad uno"
                v-bind:propNumber=propToCompositionApi
                id="checkCompositionApi"
                ref="refToCompositionApiComponent"
            >
                <p>un slot</p>
            </CompositionApiComponent>

            <MixinsComponent />

            <DirectivesComponent />

            <TeleportComponent />

            <FormulariosComponent />

            <div>
                <TemplateRefComponent propInChild="1234" ref="refToComponent"/>
                <p>Este boton accede a la referencia del componente <strong>TemplateRefComponent</strong>
                y dispara su metodo showAlert()</p>
                <button v-on:click="showAlertInRef">Alerta en hijo</button>
            </div>

            <!-- v-bind:class="{ active: isActive, 'text-with-error' : hasError }" -->
            <ClassStyleBindingComponent
                class="hola"
                v-bind:class="{ classObject }"
            />

            <ProvideAndInjectComponent/>

            <MonoRootComponent
                tag="tag-from-parent"
                notag="no-tag-from-parent"
                class="my-class-1"
            />
            <MultiRootComponent
                tag="tag-from-parent"
                notag="no-tag-from-parent"
                class="my-class-1"
            />

            <div>
                <p>Clicks on button1 inside CommunicationComponent : {{ clicksOnButton1 }}</p>
                <p>Clicks on button2 inside CommunicationComponent : {{ clicksOnButton2 }}</p>
                <p>Clicks on button3 inside CommunicationComponent : {{ clicksOnButton3 }}</p>
            </div>

            <DynamicComponents/>

            <div class="container">

                <SlotComponent/>

                <SlotComponent>

                    <div>
                        <p>Hola. Esto es contenido desde el component padre</p>
                        <p>Clicks on button1 inside CommunicationComponent : {{ clicksOnButton1 }}</p>
                        <p>Clicks on button2 inside CommunicationComponent : {{ clicksOnButton2 }}</p>
                        <p>Clicks on button3 inside CommunicationComponent : {{ clicksOnButton3 }}</p>
                    </div>

                </SlotComponent>

                <SlotComponent>

                    <template v-slot:header>
                        <h3>Cabecera pintada desde el padre</h3>
                    </template>

                    <div>
                        <p>Hola. Esto es contenido desde el component padre</p>
                        <p>Clicks on button1 inside CommunicationComponent : {{ clicksOnButton1 }}</p>
                        <p>Clicks on button2 inside CommunicationComponent : {{ clicksOnButton2 }}</p>
                        <p>Clicks on button3 inside CommunicationComponent : {{ clicksOnButton3 }}</p>
                    </div>

                    <template v-slot:footer="propsInSlot" >
                        <h3>Footer pintado desde el padre</h3>
                        <h4>Acceso al elemento del hijo {{ propsInSlot.info}}</h4>
                    </template>

                    <!-- <template v-for="item in theSlots"  v-slot:[item.name]> -->
                    <!--     {{ item.content }} -->
                    <!-- </template> -->

                    <template v-slot:[slotName]>

                        {{ theSlots[0].content }}

                    </template>

                </SlotComponent>

            </div>

            <CommunicationComponent
                class="clean"
                v-bind:callback="callbackForButton"
                v-on:eventForClicking1="eventForButton1"
                v-on:eventForClicking2="eventForButton2"
            />
                <!-- @eventForClicking1="eventForButton1" -->
                <!-- @eventForClicking2="eventForButton2" -->
                <!-- @event-for-clicking1="eventForButton1" -->
                <!-- @event-for-clicking2="eventForButton2" -->

            <!-- como pasar un
                valor dinamico v-bind:xxx
                valor dinamico (formato corto) :xxx
                o estatico
            -->
            <OneComponent
                v-bind:theSurname="book.name"
                :theName="book.author"
                theNumber="101"
                v-bind:theBook="book"
            />

        </div>

    </div>

</template>

<script lang="ts">

import App from "./App";
export default App;

</script>

<style></style>
