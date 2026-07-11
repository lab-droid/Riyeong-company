import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink-950 px-6 text-center text-white">
          <p className="text-lg font-bold">일시적인 오류가 발생했습니다.</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-xl bg-brand px-6 py-3 font-semibold hover:bg-brand-600"
          >
            새로고침
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
