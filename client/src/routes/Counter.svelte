<script lang="ts">
  import { onMount } from "svelte";
  let percent: number = 0;
  let webSocket: WebSocket;  

  onMount(() => {
    webSocket = new WebSocket("ws://localhost:5000");
    webSocket.onmessage = (e: MessageEvent) => {
      percent = e.data;
    };
  });
  function changeValue(e: any) {
    webSocket.send(percent.toString());
  }
</script>

<div class="container">
  <p>Мощность:</p>
  <span class="indicator">{percent}%</span>
  <input
    type="range"
    bind:value={percent}
    on:change={changeValue}
    style="display: block;"
    min="0"
    max="100"
  />
</div>

<style>
  p {
    font-weight: 800;
    color: black;
    font-size: 2rem;
    margin: 1rem;
  }
  .container {
    margin: 0 auto;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .indicator {
    font-size: 3rem;
  }
</style>
